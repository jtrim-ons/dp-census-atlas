package metric2

import (
	"math"
	"os"
	"path/filepath"
	"testing"

	. "github.com/smartystreets/goconvey/convey"

	"github.com/ONSdigital/dp-census-atlas/scripts/mktiles/diffr"
	"github.com/ONSdigital/dp-census-atlas/scripts/mktiles/types"
)

const (
	geoA = types.Geocode("geoA")
	geoB = types.Geocode("geoB")
	geoC = types.Geocode("geoC")
	geoD = types.Geocode("geoD")
	geoE = types.Geocode("geoE")
	geoF = types.Geocode("geoF")
	geoG = types.Geocode("geoG")
	geoH = types.Geocode("geoH")
	geoI = types.Geocode("geoI")
	geoJ = types.Geocode("geoJ")
	geoK = types.Geocode("geoK")
	geoL = types.Geocode("geoL")
	geoM = types.Geocode("geoM")
	geoN = types.Geocode("geoN")

	cat1 = types.Category("cat1")
	cat2 = types.Category("cat2")

	type1 = types.Geotype("type1")
	type2 = types.Geotype("type2")
)

var (
	geos = []types.Geocode{geoA, geoB}
	cats = []types.Category{cat1, cat2}
)

func shouldBeNaN(actual interface{}, expected ...interface{}) string {
	v, ok := actual.(float64)
	if !ok {
		return "isnan wanted float64"
	}
	if !math.IsNaN(v) {
		return "is not NaN"
	}
	return ""
}

func shouldNotBeNaN(actual interface{}, expected ...interface{}) string {
	v, ok := actual.(float64)
	if !ok {
		return "isnan wanted float64"
	}
	if math.IsNaN(v) {
		return "is NaN"
	}
	return ""
}

func Test_New(t *testing.T) {
	// NaN values cannot be compared directly.
	// We must use math.IsNaN.
	// So when testing New, we can't just create a struct M and
	// assert New returns a deep equal struct
	// We have to compare each of M's fields individually.

	cat2a1 := types.Category("CAT2A1")
	cat2a2 := types.Category("CAT2A2")
	cat2a3 := types.Category("CAT2A3")
	cats := []types.Category{cat2a2, cat2a3}

	Convey("With M initialised from a given set of geos and cats, no totals", t, func() {
		m, err := New(geos, cats, false)
		So(err, ShouldBeNil)

		Convey("the resulting table is correct", func() {
			Convey("correct number of rows", func() {
				So(len(m.tab), ShouldEqual, 2)
			})

			Convey("correct number of columns per row", func() {
				for r := range m.tab {
					So(len(m.tab[r]), ShouldEqual, 2)
				}
			})

			Convey("each cell is NaN", func() {
				for r := range m.tab {
					for c := range m.tab[r] {
						So(float64(m.tab[r][c]), shouldBeNaN)
					}
				}
			})
		})

		Convey("geoidx is correct", func() {
			want := map[types.Geocode]int{
				geoA: 0,
				geoB: 1,
			}
			So(m.geoidx, ShouldResemble, want)
		})

		Convey("catidx is correct", func() {
			want := map[types.Category]int{
				cat2a2: 0,
				cat2a3: 1,
			}
			So(m.catidx, ShouldResemble, want)
		})

		Convey("totidx is initially empty", func() {
			So(len(m.totidx), ShouldEqual, 0)
		})

		Convey("geos is correct", func() {
			So(m.geos, ShouldResemble, geos)
		})

		Convey("cats is correct", func() {
			So(m.cats, ShouldResemble, cats)
		})

		Convey("totcats is initially empty", func() {
			So(m.totcats, ShouldEqual, nil)
		})
	})

	Convey("With M initialised from a given set of geos and cats, with totals", t, func() {
		m, err := New(geos, cats, true)
		So(err, ShouldBeNil)

		Convey("the resulting table is correct", func() {
			Convey("correct number of rows", func() {
				So(len(m.tab), ShouldEqual, 2)
			})

			Convey("correct number of columns per row (includes totals)", func() {
				for r := range m.tab {
					So(len(m.tab[r]), ShouldEqual, 3)
				}
			})

			Convey("each cell is NaN", func() {
				for r := range m.tab {
					for c := range m.tab[r] {
						So(float64(m.tab[r][c]), shouldBeNaN)
					}
				}
			})
		})

		Convey("geoidx is correct", func() {
			want := map[types.Geocode]int{
				geoA: 0,
				geoB: 1,
			}
			So(m.geoidx, ShouldResemble, want)
		})

		Convey("catidx is correct", func() {
			want := map[types.Category]int{
				cat2a2: 0,
				cat2a3: 1,
			}
			So(m.catidx, ShouldResemble, want)
		})

		Convey("totidx is correct", func() {
			want := map[types.Category]int{
				cat2a1: 2,
			}
			So(m.totidx, ShouldResemble, want)
		})

		Convey("geos is correct", func() {
			So(m.geos, ShouldResemble, geos)
		})

		Convey("cats is correct", func() {
			So(m.cats, ShouldResemble, cats)
		})

		Convey("totcats is correct", func() {
			want := []types.Category{cat2a1}
			So(m.totcats, ShouldResemble, want)
		})
	})
}

func Test_mapCSVgeos(t *testing.T) {
	Convey("Given an initialised M", t, func() {
		m, err := New(geos, cats, false)
		So(err, ShouldBeNil)

		Convey("When geocodes of a valid CSV are mapped", func() {
			records := [][]string{
				{"GeographyCode", "cat2", "cat1"},
				{"geoB", "1", "2"},
				{"geoA", "3", "4"},
				{"geoZ", "5", "6"},
			}

			idx := m.mapCSVgeos(records)

			Convey("the resulting map is correct", func() {
				Convey("the map has 3 elements", func() {
					So(len(idx), ShouldEqual, 3)
				})
				Convey("the found geos are mapped", func() {
					So(idx[1], ShouldEqual, 1)
					So(idx[2], ShouldEqual, 0)
				})
				Convey("the not found geo should be -1", func() {
					So(idx[3], ShouldEqual, -1)
				})
			})
		})
	})
}

func Test_ImportCSV(t *testing.T) {
	Convey("Given an initialised M", t, func() {
		m, err := New(geos, cats, false)
		So(err, ShouldBeNil)

		Convey("When a single-row CSV is imported", func() {
			records := [][]string{
				{"GeographyCode", "cat1"},
			}
			err := m.ImportCSV(records)
			Convey("error shoud be returned", func() {
				So(err.Error(), ShouldContainSubstring, "not enough rows")
			})
		})

		Convey("When a single-column CSV is imported", func() {
			records := [][]string{
				{"GeographyCode"},
				{"geoA"},
			}
			err := m.ImportCSV(records)
			Convey("error should be returned", func() {
				So(err.Error(), ShouldContainSubstring, "not enough columns")
			})
		})

		Convey("When a non-metric file is imported", func() {
			records := [][]string{
				{"header1", "header2"},
				{"cell1", "cell2"},
			}
			err := m.ImportCSV(records)
			Convey("error should be returned", func() {
				So(err.Error(), ShouldContainSubstring, "not a metrics file")
			})
		})

		Convey("When a short row is found in the CSV", func() {
			records := [][]string{
				{"GeographyCode", "cat1"},
				{"geoA"},
			}
			err := m.ImportCSV(records)
			Convey("error should be returned", func() {
				So(err.Error(), ShouldContainSubstring, "should have")
			})
		})

		Convey("When a non-numeric value cell is in the CSV", func() {
			records := [][]string{
				{"GeographyCode", "cat1"},
				{"geoA", "this isn't a number"},
			}
			err := m.ImportCSV(records)
			Convey("error should be returned", func() {
				So(err.Error(), ShouldContainSubstring, "ParseFloat")
			})
		})

		Convey("When a duplicate CSV is imported", func() {
			records := [][]string{
				{"GeographyCode", "cat1", "cat3"},
				{"geoA", "1.2", "3.4"},
				{"geoC", "5.6", "7.8"},
			}
			err := m.ImportCSV(records)
			So(err, ShouldBeNil)
			Convey("second import should return error", func() {
				err := m.ImportCSV(records)
				So(err.Error(), ShouldContainSubstring, "duplicate")
			})
		})

		Convey("When a valid CSV is imported", func() {
			records := [][]string{
				{"GeographyCode", "cat1", "cat3"},
				{"geoA", "1.2", "3.4"},
				{"geoC", "5.6", "7.8"},
			}
			err := m.ImportCSV(records)
			Convey("no error should be returned", func() {
				So(err, ShouldBeNil)
			})
			Convey("correct table should be built", func() {
				Convey("table should have two rows", func() {
					So(len(m.tab), ShouldEqual, 2)
				})
				Convey("each row should have two columns", func() {
					for _, record := range m.tab {
						So(len(record), ShouldEqual, 2)
					}
				})
				Convey("matched cell should have correct value", func() {
					So(m.tab[0][0], ShouldEqual, 1.2)
				})
				Convey("unmatched cells should still be NaN", func() {
					So(float64(m.tab[0][1]), shouldBeNaN)
					So(float64(m.tab[1][0]), shouldBeNaN)
					So(float64(m.tab[1][1]), shouldBeNaN)
				})
			})
		})
	})
}

func Test_mapGeos(t *testing.T) {
	Convey("Given an initialised M", t, func() {
		m, err := New(geos, cats, false)
		So(err, ShouldBeNil)

		Convey("empty geo list returns empty index", func() {
			idx := m.mapGeos(nil)
			So(len(idx), ShouldEqual, 0)
		})
		Convey("unknown geos are -1 in index", func() {
			idx := m.mapGeos([]types.Geocode{types.Geocode("geoZ")})
			So(idx[0], ShouldEqual, -1)
		})
		Convey("known geos are indexed correctly", func() {
			idx := m.mapGeos([]types.Geocode{geoB, geoA})
			So(idx[0], ShouldEqual, 1)
			So(idx[1], ShouldEqual, 0)
		})
	})
}

func Test_MakeTiles(t *testing.T) {
	Convey("Given an initialised M", t, func() {
		// initialise m with a 3 geos and 2 cats
		m, err := New([]types.Geocode{geoA, geoB, geoN}, cats, false)
		So(err, ShouldBeNil)

		Convey("after importing a valid CSV", func() {
			// import a CSV that has a missing value
			records := [][]string{
				{"GeographyCode", "cat1", "cat2"},
				{"geoA", "1.2", "3.4"},
				{"geoB", "5.6", "7.8"},
				{"geoN", "9.1", "NaN"},
			}

			err := m.ImportCSV(records)
			So(err, ShouldBeNil)

			// Request tiles without any geos.
			// Should not be generated.
			Convey("empty geo list generates only headers", withTempDir(func(tmpdir string) {
				err := m.MakeTiles(nil, tmpdir)
				So(err, ShouldBeNil)
				err = diffr.CompareDirs(tmpdir, "testdata/tiles-0-geos")
				So(err, ShouldBeNil)
			}))

			// Request tiles with a single geo that exists in the table.
			// Should generate tiles with one geo each.
			Convey("single-geo list generates single data line", withTempDir(func(tmpdir string) {
				err := m.MakeTiles([]types.Geocode{geoA}, tmpdir)
				So(err, ShouldBeNil)
				err = diffr.CompareDirs(tmpdir, "testdata/tiles-1-geo")
				So(err, ShouldBeNil)
			}))

			// Request tiles with two geos that exist in the table.
			// Should generate tiles with both geos.
			Convey("two-geo list generates two data lines", withTempDir(func(tmpdir string) {
				err := m.MakeTiles([]types.Geocode{geoA, geoB}, tmpdir)
				So(err, ShouldBeNil)
				err = diffr.CompareDirs(tmpdir, "testdata/tiles-2-geos")
				So(err, ShouldBeNil)
			}))

			// Request tiles with a geo that does not exist in the table.
			// Existing geos should end up in csvs.
			Convey("missing geos are skipped", withTempDir(func(tmpdir string) {
				err := m.MakeTiles([]types.Geocode{geoA, geoB, geoC}, tmpdir)
				So(err, ShouldBeNil)
				err = diffr.CompareDirs(tmpdir, "testdata/tiles-3-geos")
				So(err, ShouldBeNil)
			}))

			// Request a tile with a geo that has a missing value for a category.
			// That geo should be skipped in the tile for the missing category.
			Convey("missing cells are skipped", withTempDir(func(tmpdir string) {
				err := m.MakeTiles([]types.Geocode{geoA, geoN}, tmpdir)
				So(err, ShouldBeNil)
				err = diffr.CompareDirs(tmpdir, "testdata/tiles-nan")
				So(err, ShouldBeNil)
			}))
		})
	})
}

func withTempDir(f func(dir string)) func() {
	return func() {
		dir, err := os.MkdirTemp("", "mktiles")
		Printf("tmpdir = %s", dir)
		So(err, ShouldBeNil)
		f(dir)
		// Don't use defer to remove dir.
		// If a test fails we want to look at the output. XXX does this work?
		os.RemoveAll(dir)
	}
}

func Test_tabrowsByType(t *testing.T) {
	// lookup function for a subset of the geos in m
	lookup := func(geocode types.Geocode) (types.Geotype, bool) {
		tbl := map[types.Geocode]types.Geotype{
			geoA: type1,
			geoB: type1,
			geoC: type2,
		}
		geotype, found := tbl[geocode]
		return geotype, found
	}

	Convey("Given an initialised M", t, func() {
		// set up a table with a geo that isn't found by lookup()
		m, err := New([]types.Geocode{geoA, geoB, geoC, geoN}, cats, false)
		So(err, ShouldBeNil)

		Convey("tabrowsByType categorises geos", func() {
			bytype := m.tabrowsByType(lookup)

			want := map[types.Geotype][]int{
				type1: []int{0, 1},
				type2: []int{2},
			}

			So(bytype, ShouldResemble, want)
		})
	})
}

func Test_MakeBreaks(t *testing.T) {
	lookup := func(geocode types.Geocode) (types.Geotype, bool) {
		tbl := map[types.Geocode]types.Geotype{
			geoA: type1,
			geoB: type1,
			geoC: type1,
			geoD: type1,
			geoE: type1,
			geoF: type1,
			geoG: type1,
			geoH: type2,
			geoI: type2,
			geoJ: type2,
			geoK: type2,
			geoL: type2,
			geoM: type2,
			geoN: type2,
		}
		geotype, found := tbl[geocode]
		return geotype, found
	}

	Convey("Given an initialised M", t, func() {
		geos := []types.Geocode{geoA, geoB, geoC, geoD, geoE, geoF, geoG, geoH, geoI, geoJ, geoK, geoL, geoM, geoN}

		m, err := New(geos, cats, false)
		So(err, ShouldBeNil)

		Convey("When a valid CSV is imported", func() {
			records := [][]string{
				{"GeographyCode", "cat1", "cat2"},
				{"geoA", "1", "15"},
				{"geoB", "2", "16"},
				{"geoC", "3", "17"},
				{"geoD", "4", "18"},
				{"geoE", "5", "19"},
				{"geoF", "6", "20"},
				{"geoG", "7", "21"},
				{"geoH", "8", "22"},
				{"geoI", "9", "23"},
				{"geoJ", "10", "24"},
				{"geoK", "11", "25"},
				{"geoL", "12", "26"},
				{"geoM", "13", "27"},
				{"geoN", "14", "28"},
			}
			err := m.ImportCSV(records)
			So(err, ShouldBeNil)

			Convey("correct breaks files should be produced", withTempDir(func(tmpdir string) {
				err := m.MakeBreaks(tmpdir, lookup)
				Convey("no errors", func() {
					So(err, ShouldBeNil)
				})
				Convey("type1 files correct", func() {
					err := diffr.CompareDirs(
						filepath.Join(tmpdir, "type1"),
						"testdata/breaks/type1",
					)
					So(err, ShouldBeNil)
				})
				Convey("type2 files correct", func() {
					err := diffr.CompareDirs(
						filepath.Join(tmpdir, "type2"),
						"testdata/breaks/type2",
					)
					So(err, ShouldBeNil)
				})
			}))
		})
	})
}

func Test_Fake(t *testing.T) {
	Convey("Given an initialised M", t, func() {
		m, err := New(geos, cats, false)
		So(err, ShouldBeNil)

		Convey("Fake fills table with random values", func() {
			m.Fake(nil, 0)
			for _, tabrow := range m.geoidx {
				for _, tabcol := range m.catidx {
					So(float64(m.tab[tabrow][tabcol]), shouldNotBeNaN)
				}
			}
		})
	})
}

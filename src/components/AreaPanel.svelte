<script lang="ts">
  import { page } from "$app/stores";
  import { geography } from "../stores/geography";
  import GeoSearch from "./AreaSearch.svelte";
  import Icon from "./MaterialIcon.svelte";
  import { deselectGeography } from "../helpers/navigationHelper";

  $: open = false;
  const toggleOpen = () => {
    open = !open;
  };
  $: openOrCloseAreaSearchPanelText = open ? "Close area search panel" : "Open area search panel";

  const resetSelectedGeography = () => {
    deselectGeography($page.url.searchParams);
  };
</script>

<section class="py-3 border-b-2">
  <h2 class="font-bold text-slate-500">Area</h2>
  <!-- nested buttons are invalid html, so workaround with a clickable label -->
  <label for="area-input" on:click={toggleOpen} class="group w-full text-left hoverable custom-ring">
    <div class="flex items-center gap-2">
      <div class="text-xl">
        {$geography.displayName}
      </div>
      {#if $geography?.geoType.toUpperCase() !== "EW"}
        <div class="ml-1 text-sm bg-ons-census text-white font-bold px-1 rounded-sm">
          {$geography?.geoType.toUpperCase()}
        </div>
        <button
          on:click={resetSelectedGeography}
          title="Clear selected area"
          aria-label="Clear selected area"
          class="flex ml-1 text-2xl hover:scale-105 custom-ring bg-ons-grey-15 hover:bg-ons-grey-35 rounded"
        >
          <Icon kind="close" />
        </button>
      {/if}
      <button
        class="ml-auto custom-ring"
        title={openOrCloseAreaSearchPanelText}
        aria-label={openOrCloseAreaSearchPanelText}
      >
        <div class="text-2xl group-hover:scale-125 transition-all ml-2">
          <Icon kind="arrowForwardIos" orientation={open ? "w" : "e"} />
        </div>
      </button>
    </div>
  </label>

  <div class="mt-3 mb-1" style:display={open ? "block" : "none"}>
    <GeoSearch />
  </div>
</section>

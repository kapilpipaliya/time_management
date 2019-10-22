<script>
  // import * as _ from "lamb";
  import { onMount, onDestroy, beforeUpdate } from "svelte";
  import { createEventDispatcher } from "svelte";
  const dp = createEventDispatcher();

  export let events = []
  export let quickcomponent=false;
  export let requiredFilter = {}

  export let h = []

  export let items = [];
  export let count = 0;
  export let query = {}
  export let customFilter = {}
  let limit = query.limit || 0;
  let pages = [1]
  let current_page = query.page || 1
  let total = 1;
  $: {
    // if current_page is not exist set it 1
    if(pages.indexOf(current_page) == -1){
      current_page = 1
    }
  }

  $: {
    // update on limit or count change.
    if(limit > 0) {
      total = Math.ceil(count/limit)
      const arr = []
        for (let i = 1; i <= total; i++) {
          arr.push(i)
        }
        pages = arr
      } else {
        pages = [1]
      }

  }
  
  let headers = [];
  let visible_columns = [];
  let offset_columns = [];
  let tooltip_offset_columns = [];
  let headersSelectors = [];
  let headerColTypes = [];

  let hiddenColumns = []

  let er =""

  let filterSettings = []
  let sortSettings = []
  let quickview = []
  let first_visibile_column = 0;
  let addnewform = false;

  const fns = [];
  
  /*export const refresh = () => {
    const args = [filterSettings, sortSettings, [limit, 0, current_page]]
    const e1 = [ events[1], args ]
    const e2 = [ events[2], args ]
    S.trigger([e1, e2]);
    return true;
  }*/
  /*const successSave = (e) => {
    const {rowIdx, d} = e.detail
    if(rowIdx === null) {
      toogleAddForm()
      refresh()
    } else {
      quickview[rowIdx] = false
      reFetchRow(rowIdx)
    }
  }*/
  /*
  const handleFilter = col => event => {
    // S.trigger(event_columns_filters_name, filterSettings);
    refresh();
  };
  /*
  const resetFilter_ = () => {
      const array = new Array(headers.length);
      array.fill(null);
      for (let key in requiredFilter) {array[key] = requiredFilter[key]}
      filterSettings = array;
  }
  const resetFilter = event => {
    resetFilter_();
    //S.trigger(event_columns_filters_name, filterSettings);
    refresh();
  };
  const fillHeadersArray = (data) => {
      headers = data[0] || [];
      headersSelectors = data[1] || [];
      headerColTypes = data[2] || [];
      visible_columns = data[3] || [];
      let i;
      for (i = 0; i < visible_columns.length; i++) {
        if (visible_columns[i]) {
          first_visibile_column = i;
          break;
        }
      }
      offset_columns = data[4]
      tooltip_offset_columns = data[5]
      resetFilter_();
  }*/
/*
  function onItemClick(litem) {
    dp("onItemClick", { item: litem });
    //item = litem;
    //openModal();
  }

  function onDeleteClick(litem) {
    dp("onDeleteClick", { item: litem });
    return true;
  }*/

  /*const reFetchRow = async(rowIdx) => {
      const e = [...events[1], rowIdx]
      const d = await new Promise((resolve, reject) => { S.bind_(e, ([data]) => { resolve(data) }, [[`=${items[rowIdx][0]}`]]); });
      if(d) {
        for (let i = 0; i < d[0].length; i++) {
          items[rowIdx][i] = d[0][i]
        }
        items[rowIdx] = items[rowIdx]
      } else {
        alert("error")
      }
      S.unbind(e);
  }
  const deleteRow = (e) => {
    const {rowIdx} = e.detail
    if(rowIdx !== null) {
      quickview[rowIdx] = false
      items[rowIdx] = false
    }
  }*/

/* disable sorting.
  const handleSort = (e, col) => {
    if(e.ctrlKey) {

    } else {
      const sortOrder = sortSettings[col]
      sortSettings = []
      if(sortOrder === undefined) {
        sortSettings[col] = 0
      } else if (sortOrder === 0) {
        sortSettings[col] = 1
      } else {
        sortSettings[col] = undefined
      }
    }
    refresh();
  };
  */
/* Disable context menu
  let menuDisplayed = false;
  let inputMenuDisplayed = false;

  const onHeaderContext = event => {
    const left = event.clientX;
    const top = event.clientY;
                
    const menuBox = window.document.querySelector(".menu");
    if(menuBox) {
      menuBox.style.left = left + "px";
      menuBox.style.top = top + "px";
      menuBox.style.display = "block";
      
      menuDisplayed = true;
    }

    // window.addEventListener("click", function() {
    //     if(menuDisplayed == true){
    //         menuBox.style.display = "none"; 
    //     }

  }
  const onTextInputContext = event => {
    const left = event.clientX;
    const top = event.clientY;
                
    const menuBox = window.document.querySelector(".menu-input");
    if(menuBox) {
      menuBox.style.left = left + "px";
      menuBox.style.top = top + "px";
      menuBox.style.display = "block";
      
      inputMenuDisplayed = true;
    }

    // window.addEventListener("click", function() {
    //     if(menuDisplayed == true){
    //         menuBox.style.display = "none"; 
    //     }

  }
  const closeInputMenu = event => {
    const menuBox = window.document.querySelector(".menu-input");
        if(inputMenuDisplayed == true){
            menuBox.style.display = "none"; 
        }
  }*/
/*
  const toogleAddForm = () => {
    addnewform = !addnewform
  }
  */
 /*
  const deleteRow2 = (i) => async() => {
    const r = confirm("Are You Sure!");
    if (r == true) {
      //if (d.ok) { deleteRow({detail: {rowIdx: i}}) } else { alert(d.error) }
      }
    }*/
 /* const limitChange = () => {
    current_page = 1
    if (limit < 0) limit = 0;
    refresh();
    }*/
</script>
<style src="./_Table.less"></style>
<template src='./_Table.pug'></template>
<script>
  export let size = "";
  export let placeholder = "";
  export let value = "";
  export let type = "text";
  export let isPagger = false;

  let sizeClass = "px-3 py-3";
  let widthClass = isPagger ? "pagger" : "w-full";

  switch (size) {
    case "sm":
      sizeClass = "px-2 py-1";
      break;
    case "md":
      sizeClass = "px-3 py-3";
      break;
    case "lg":
      sizeClass = "px-3 py-4";
      break;
    default:
      break;
  }
</script>

<div class="mb-3 pt-0">
  <input
    {value}
    {type}
    {placeholder}
    class="{sizeClass} 
    {widthClass} w-full text-center placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline"
  />
</div>

<script>
  export let size = "";
  export let placeholder = "";
  export let value = "";
  export let type = "text";
  export let label = 'Label';
  export let name = '';

  let sizeClass = "px-3 py-3";
  // let widthClass = isPagger ? "pagger" : "w-full";

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

<div class="md:flex md:items-center mb-6">
  <div class="md:w-1/3">
    <label 
      class="block text-gray-500 font-thin md:text-right mb-1 md:mb-0 pr-4" 
      for="{name}">
      {label}
    </label>
  </div>
  <div class="md:w-2/3">
    <input 
      class="appearance-none border-2 border-gray-200 rounded w-full {sizeClass} text-gray-700 leading-tight focus:outline-none focus:border-purple-500" 
      id="{name}" 
      {type} 
      {value}
      {placeholder}
    >
  </div>
</div>
<template>
  <div
    class="w-full flex flex-col items-center justify-center gap-8 sm:px-6 md:px-0"
  >
    <div>
      <h1 class="font-[600] text-[48px]">Envio em Massa</h1>
    </div>
    <div>
      <p class="text-center font-[400] text-[18px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse<br />
        quis imperdiet mi, non cursus augue
      </p>
    </div>
    <div
      class="border border-1 border-gray-500 max-h-[262px] max-w-[430px] w-full h-full mt-5 flex flex-col items-center justify-center gap-[30px] rounded-md"
    >
      <img
        src="../../../../assets/images/upload-item.svg"
        alt="Upload item"
        class="w-[122px] h-[122px]"
      />
      <div class="relative inline-block">
        <button
          class="bg-gradient-to-r from-[#5800AF] to-[#944CDC] text-white py-2 rounded w-[209px] flex items-center justify-center gap-2"
        >
          <img
            src="../../../../assets/images/plus-icon.svg"
            alt="plus icon"
            class="w-[16px] h-[16px]"
          />
          <span class="font-[500] text-[16px]">novo envio em massa</span>
        </button>
        <input
          type="file"
          class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          @change="handleFileUpload"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    handleFileUpload() {},
  },
};
</script>

<template>
    <TutorialContent title="Printing or Saving to a PDF File">
        <div class="py-3 px-3">
            <div class="pb-3">
                <h2 class="font-bold text-xl py-3">Issue</h2>
                <div class="space-y-3">
                    <p class="text-lg">
                        Note: When printing the monthly schedule to PDF or directly to a printer, most browsers
                        automatically add <b> headers and footers</b> by default. To avoid issues with the printed or
                        downloaded copy, please make sure to uncheck the Headers and footers option in the print
                        settings.

                    </p>

                    <div>
                        <img src="../imgs/T007-01.png" alt="Headers and footers" class="w-full">
                        <i>Headers and footers appearing on printed schedule</i>
                    </div>
                </div>
                <h2 class="font-bold text-xl py-3 mt-9">What you can do</h2>
                <div class="space-y-3">
                    <p class="text-lg">
                        When the print preview appears, look for the option to disable Headers and footers. Make sure
                        this option is unchecked before printing.
                    </p>
                    <div>
                        <img src="../imgs/T007-02.png" alt="Headers and footers" class="w-full p-10">
                        <i>Set the Headers and footers to Uncheck</i>
                    </div>
                </div>
            </div>
        </div>
    </TutorialContent>
</template>

<script setup lang="ts">
    import TutorialContent from '../../layouts/TutorialContent.vue';


</script>

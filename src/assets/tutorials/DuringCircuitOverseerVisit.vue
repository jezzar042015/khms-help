<template>
    <TutorialContent title="Changing the Schedule for a Circuit Overseer's Visit">

        <div class="py-3 px-3">
            <div class="pb-3">

                <h2 class="font-bold text-xl py-3">Why Needed?</h2>
                <div class="space-y-3">
                    <p class="text-lg">
                        During the Circuit Overseer’s visit, the schedule for the Congregation Bible Study is
                        replaced by the Circuit Overseer’s first service talk. The scheduled last song is also replaced
                        with the song provided by the Circuit Overseer.
                    </p>
                    <p class="text-lg">
                        Follow the steps below to apply the schedule adjustments for the visit week.
                    </p>

                </div>
            </div>

            <h2 class="font-bold text-xl py-3">Steps</h2>
            <ol class="list-decimal list-inside text-lg flex flex-col space-y-3">
                <li>
                    <span>Select the month when the Circuit Overseer will visit.</span>
                </li>
                <li>
                    <span>Open <b>Settings</b> by clicking the gear icon.</span>
                </li>
                <li>
                    <span>Go to the <b>Circuit Overseer’s Visit</b> section in the settings.</span>
                </li>
                <li>
                    <span>Toggle the switch for <i class="font-bold">Has Circuit Overseer’s visit this month</i> to
                        ON.</span>
                </li>
                <li>
                    <span>Choose the <b>visit week</b>.</span>
                </li>
                <li>
                    <span>Enter the <b>Circuit Overseer’s name</b> (this assigns the 1st Service Talk to them
                        automatically).</span>
                </li>
                <li>
                    <span>Add the <b>theme</b> for the 1st Service Talk.</span>
                </li>
                <li>
                    <span>Enter the <b>song number</b> for the last song (this replaces the usual last song).</span>
                </li>
                <li>
                    <span>Close the settings pane — your changes will update the schedule automatically.</span>
                </li>
            </ol>
        </div>


    </TutorialContent>
</template>

<script setup lang="ts">
    import TutorialContent from '../../layouts/TutorialContent.vue';


</script>

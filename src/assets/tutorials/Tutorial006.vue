<template>
    <TutorialContent title="Switching Between Schedule Templates">

        <div class="py-3 px-3">
            <div class="pb-3">
                <h2 class="font-bold text-xl py-3">Why Needed?</h2>
                <div class="space-y-3">
                    <p class="text-lg">
                        The organization has provided an official template for the OCLM meeting schedule, with the code
                        S-140. However, the note in JW HUB states,

                    </p>
                    <p>
                        <i>
                            "Although the use of this template will contribute to the
                            schedules having a more consistent appearance, <b> its use is optional </b>"
                        </i>.
                    </p>

                    <p>
                        Some congregations, especially those in Sign Language, prefer a more vibrant and detailed
                        template. Both templates have their own unique advantages and disadvantages, catering to
                        different needs and preferences.
                    </p>

                    <p>
                        <b>NOTE:</b> Switching between templates will not affect the student and publisher assignments.
                        It only changes the appearance but keeps the assignments and other congregation settings.
                    </p>

                    <div>
                        <img src="../imgs/T006-01.png" alt="Toggling Circuit Overseer's visit" class="w-3/5">
                    </div>
                </div>

                <h2 class="font-bold text-xl py-3">Switching Between Templates</h2>
                <ol class="list-decimal list-inside text-lg space-y-3">
                    <li>
                        <div class="inline-flex items-center space-x-2">
                            Open &nbsp;<b>Settings</b>&nbsp; by clicking the gear icon
                            <IconGear class="h-6 w-6" />.
                        </div>
                    </li>
                    <li>
                        Find the Preferences section and find the Schedule Template option.
                    </li>
                    <li>
                        Select between the two options: <b>S-140 Template</b> or <b>Customized Template</b>.
                    </li>
                </ol>
            </div>
        </div>
    </TutorialContent>
</template>

<script setup lang="ts">
    import TutorialContent from '../../layouts/TutorialContent.vue';
    import IconGear from '../icons/IconGear.vue';


</script>
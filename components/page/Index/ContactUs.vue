<script setup>
    async function submit(formData, callback) {
        const success = false// TODO: http request through responsable store
        useNuxtApp().$toast.warning('Данный функционал находится в разработке')
        callback(success)
    }
</script>

<template>
    <div class="contact-us">
        <div class="container contact-us-container bg-lines">
            <HelperBGLines :pos="[1,2,5]" :lighter="0.2" />
            <div class="row align-items-center">
                <div class="col-4 head">
                    <h2 class="with-line">Свяжитесь с нами</h2>
                    <span class="text">Если у вас есть проект, <br>направленный на улучшение будущего</span>
                </div>
                <div class="col-8">
                    <FormWrapper
                        id="contact-us-form"
                        class="form"
                        name="contactUs"
                        :white="true"
                        invalid-placement="bottom"
                        :button="{ text: 'Отправить' }"
                        @submit="submit"
                    />
                </div>
            </div>
        </div>
        <i class="bottom-circle"></i>
    </div>
</template>

<style lang="scss">
    .contact-us {
        position: relative;
        background-color: var(--blue-color);
        color: var(--white-color);
        border-bottom: 1px solid var(--white-color);
        
        .contact-us-container {
            padding: var(--space) 0;

            .head {
                display: flex;
                flex-direction: column;
                gap: 24px;

                h2 {
                    color: inherit;
                }
            }

            .form {
                flex-direction: row;
                align-items: flex-end;

                fieldset {
                    flex: 4;
                }

                .btn {
                    flex: 2;
                }
            }
        }

        .bottom-circle {
            position: absolute;
            left: 50%;
            bottom: 0;
            margin-bottom: -24px;
            width: 48px;
            height: 48px;
            border: 1px solid var(--white-color);
            background-color: var(--blue-color);
            border-radius: 50%;
        }
    }
</style>
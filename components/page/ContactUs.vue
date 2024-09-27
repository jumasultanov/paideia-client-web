<template>
    <div class="contact-us">
        <div class="container">
            <h3>Если у вас есть проект направленный на улучшение будущего свяжитесь с нами!</h3>
            <form>
                <div class="inputs">
                    <BFormInput placeholder="Ваше имя или организация" />
                    <BFormInput placeholder="Электронная почта, соц.сеть" />
                </div>
                <BButton variant="primary">Отправить</BButton>
            </form>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .contact-us {
        background-color: black;
        margin-bottom: 10px;
        padding: 77px 0;
        color: white;

        h3 {
            font-size: 32px;
            margin-bottom: 50px;
        }

        form {
            display: flex;
            gap: 32px;
            justify-content: space-between;

            .inputs {
                display: flex;
                gap: 32px;

                .form-control {
                    --bs-border-color: white;
                    --bs-border-radius: 0;
                    font-size: 20px;
                    padding: 12px 32px;
                    min-width: 360px;
                }
            }

            .btn {
                width: 360px;
                justify-content: center;
            }
        }
    }
</style>
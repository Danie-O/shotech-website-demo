<script setup>
    import CTABtn from '../components/buttons/CTABtn.vue';
    import { ref } from 'vue';
    import axios from 'axios';

    const contact_email = "theshoetanfoundation@gmail.com";
    // const contact_number = "";
    // const contact_address = "";

    let formData = {
        'firstName': '',
        'lastName': '',
        'email': '',
        'phoneNumber': '',
        'subject': '',
        'message': ''
    };

    const subjectOptions = ['General Inquiry', 'Cloud Infrastructure', 'CI/CD', 'Containerization'];
    const focusedField = ref('');

    const submitMessage = ref('');
    const submitMessages = {
        'success': 'Thanks for reaching out!',
        'failure': 'Message could not be sent, please try again.',
        'missing fields': 'Some required fields are missing!'
    };

    const validateEmail = (email) => {
        if (!email) {
            return 'This field is required';
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateForm = () => {
        const requiredFields = ['firstName', 'lastName', 'email', 'phoneNumber', 'subject', 'message'];
        const errors = [];

        requiredFields.forEach((field) => {
            if (formData[field] === '') {
                errors.push(field);
                submitMessage.value = 'missing fields';
            }
        });

        if (!validateEmail(formData['email'])) {
            errors.push('email');
        }
        return errors.length === 0;
    };

    const resetForm = () => {
        formData.firstName = '';
        formData.lastName = '';
        formData.email = '';
        formData.phoneNumber = '';
        formData.subject = '';
        formData.message = '';
    };

    const submitForm = async () => {
        if (validateForm()) {
            try {
                const emailApiUrl = process.env.VUE_APP_SEND_EMAIL_API_URL
                const response = await axios.post(emailApiUrl, formData);
                console.log(response.data.message);
                submitMessage.value = 'success';
                resetForm();
                // submitMessage.value = ''
            } catch (error) {
                console.error('Error sending email:', error.response.data.error);
                submitMessage.value = 'failure';
            }
        } else {
            submitMessage.value = 'missing fields';
        }
    };
</script>


<template>
    <div class="px-20 md:px-auto lg:px-64 py-2 mt-auto md:mt-6 lg:mt-auto w-full h-[85%] md:h-[65%] lg:h-[90%]">
        <div class="w-[100%] gap-4 md:gap-y-3 md:h-auto mt-auto mb-auto relative">
            <section class="h-auto pl-4 pr-4 relative">
                <p class="text-title-text-color text-4xl font-bold text-center leading-10">Contact Us</p>
                <p class="mt-3 sm:mt-1 text-center text-sub-text-color text-lg font-medium">Any question or remarks? Just write us a message!</p>
            </section>
            <section class="grid grid-cols-1 md:grid-cols-[40%_60%] gap-x-0 mt-16 md:ml-4 md:mr-4">
                <div class="hidden md:inline md:border-r md:border-neutral-500 md:pl-8 md:pr-8 md:relative">
                    <div class="contact-info text-secondary-color text-3xl font-semibold leading-10">Contact Information</div>
                    <div class="contact-info text-neutral-500 text-lg font-normal leading-6">You can also reach out to us using the<br/>contact details below.</div>
                    <div class="mt-10 h-auto relative">
                        <!-- <div class="h-14 static flex gap-x-4 w-full">
                            <img class="w-6 h-6 relative flex-col justify-start inline-flex" src="../assets/contact/phonecall.svg"/>
                            <p class="contact-info text-regular-text-color text-base font-normal w-9/12 break-words">{{ contact_number }}</p>
                        </div> -->
                        <div class="h-14 static flex gap-x-4 w-full"> 
                            <img class="w-6 h-6 relative justify-start inline-flex" src="../assets/contact/email.svg"/>
                            <p class="contact-info text-regular-text-color text-base font-normal w-9/12 break-words">{{contact_email}}</p>
                        </div>
                        <!-- <div class="h-12 static flex gap-x-4 w-full">
                            <img class="w-6 h-6 relative flex-col justify-start items-start inline-flex" src="../assets/contact/location-filled.svg"/>
                            <p class="contact-info text-regular-text-color text-base font-normal w-9/12 break-words">
                                {{ contact_address }}
                            </p>
                        </div> -->
                    </div>
                </div>
                <div class="md:pl-8 w-full">
                    <form class="mx-auto" @submit.prevent="submitForm" method="POST" action="">
                        <div class="mb-6 grid grid-cols-2 gap-3" @click="submitMessage=''">
                            <div class="form-input" id="first-name-input">
                                <label class="block mb-1 text-sm font-medium leading-tight" 
                                    :class="focusedField === 'firstName' || formData['firstName'] != '' ? 'text-black' : 'text-sub-text-color'"
                                    for="firstName">First name
                                </label>
                                <input 
                                    type="text" name="firstName" id="firstName" 
                                    v-model="formData['firstName']"
                                    @focus="focusedField = 'firstName'"
                                    @blur="focusedField = ''"
                                >
                            </div>
                            <div class="form-input" id="last-name-input">
                                <label 
                                    class="block mb-1 text-sm font-medium leading-tight"
                                    :class="focusedField === 'lastName' || formData['lastName'] != '' ? 'text-black' : 'text-sub-text-color'"
                                    for="lastName">Last Name
                                </label>
                                <input 
                                    type="text" name="lastName" id="lastName" 
                                    v-model="formData['lastName']"
                                    @focus="focusedField = 'lastName'"
                                    @blur="focusedField = ''"
                                >
                            </div>
                        </div>
                        <div class="mb-6 grid grid-cols-2 gap-3 flex-row">
                            <div class="form-input" id="email-input">
                                <label 
                                    class="block mb-1 text-sm font-medium leading-tight"
                                    :class="focusedField === 'email' || formData['email'] != '' ? 'text-black' : 'text-sub-text-color'"
                                    for="email"
                                >
                                    Email 
                                </label>
                                <input 
                                    type="email" name="email" id="email"
                                    class="... peer"
                                    placeholder=" "
                                    pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                                    v-model="formData['email']"
                                    @focus="focusedField = 'email'"
                                    @blur="focusedField = ''"
                                />
                                <span class="mt-2 hidden text-red-500 text-sm peer-[&:not(:placeholder-shown):invalid]:block">
                                    Please enter a valid email address.
                                </span>  
                            </div>
                            <div id="phone-number-input" class="form-input relative">
                                <label 
                                    class="block mb-1 text-sm font-medium leading-tight"
                                    :class="focusedField === 'phoneNumber' || formData['phoneNumber'] != '' ? 'text-black' : 'text-sub-text-color'"
                                    for="phoneNumber">Phone Number</label>
                                <input 
                                    class="absolute mt-[1.35rem]"
                                    type="text" name="phoneNumber" id="phoneNumber"
                                    v-model="formData['phoneNumber']"
                                    @focus="focusedField = 'phoneNumber'"
                                    @blur="focusedField = ''"
                                >
                            </div>
                        </div>

                        <div class="mb-6">
                            <label 
                                class="block mb-3 text-neutral-400 text-sm font-medium leading-tight" 
                                :class="focusedField === 'subject' || formData['subject'] != '' ? 'text-black' : 'text-sub-text-color'"
                                for="subject">Select subject</label>
                            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div v-for="option in subjectOptions" :key="option" class="flex items-center gap-x-2">
                                    <input 
                                        type="radio" name="radio" 
                                        :id="option" :value="option"
                                        v-model="formData['subject']"
                                    >
                                    <label 
                                        :for="option"
                                        class="text-sm md:text-base font-medium leading-tight"
                                        :class="formData['subject'] !== '' ? 'text-black' : 'text-sub-text-color'"
                                    >
                                        {{ option }}
                                    </label>
                                </div>
                            </div>                            
                        </div>

                        <div class="mb-0" id="message">
                            <label 
                                class="block mb-2 text-sm font-medium leading-tight"
                                :class="focusedField === 'message' || formData['message'] != '' ? 'text-black' : 'text-sub-text-color'"
                                for="message">Message</label>
                            <input 
                                class="p-2 w-[95%] text-black text-sm font-medium leading-tight border-b-[1.5px] border-sub-text-color bg-transparent" 
                                type="text"
                                name="message" id="message" placeholder="Write your message ..."
                                v-model="formData['message']"
                                @focus="focusedField = 'message'"
                                @blur="focusedField = ''"
                            >
                        </div>
                        <div class="relative left-0 top-0 md:left-auto md:top-auto right-8 flex justify-center items-center md:justify-end ">
                            <CTABtn 
                                buttonType="submit" 
                                title="Send Message" textColor="black"
                                id="submit-button" 
                                class="mt-10 bg-primary-color relative"
                                :class="submitMessage === 'failure' || 'missing fields' ? 'left-6': 'left-0'"
                            >
                            </CTABtn>
                            <div class="ml-4 left-6 relative mt-10 p-2 bg-orange-100 text-xl border border-black font-medium text-center" v-if="submitMessage === 'success'">
                                {{ submitMessages['success'] }}
                            </div>
                            <div class="ml-4 left-6 relative mt-10 p-2 text-xl text-red-500 border border-red-700 bg-white font-medium text-center" v-else-if="submitMessage === 'failure'">
                                {{ submitMessages['failure'] }}
                            </div>
                            <div class="ml-4 left-6 relative mt-10 p-2 text-xl text-red-500 border border-red-700 bg-white font-medium text-center" v-else-if="submitMessage === 'missing fields'">
                                {{ submitMessages['missing fields'] }}
                            </div>
                        </div> 
                    </form>
                </div>
            </section>

            <div class="justify-center md:justify-normal items-center mt-8 md:mt-2 md:bottom-0 md:relative flex md:pl-12 gap-x-3">
                <div class="w-8 h-8 relative">
                    <a href="https://www.linkedin.com/company/shoetan-foundation-inc/">
                        <img class="w-8 h-8 left-0 top-0 absolute rounded-full" src="../assets/socials/linkedin-circle.svg"/>
                    </a>
                </div>
                <div class="w-8 h-8 relative">
                    <a href="https://www.youtube.com/channel/UC-pZDK_WWjoxGvi_TVSXWWw">
                        <img class="w-8 h-8 left-0 top-0 absolute rounded-full" src="../assets/socials/youtube-circle.svg"/>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

.contact-info {
  font: "Poppins", sans-serif;
}

.form-input {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 0.5rem;
}
  
.form-input input {
    width: 90%;
    padding: 4px;
    @apply border-b-[1.5px] border-neutral-400 bg-transparent;

    &:focus {
        @apply border-b-2 border-zinc-900;
    }
}

</style>
<script>
    import {  ToastNotification  } from "carbon-components-svelte";
    import {fade} from "svelte/transition"

    export let kind = "success"
    export let title = "Success"
    export let subtitle = ""
    export let caption = new Date().toLocaleString()
    export let hideCloseButton = true
    export let visible = false

    const delay =  6000


    const hide = () => {
        if (kind !== "error"){
            setTimeout(()=>{
                close()
            }, 1000)
        }
    }

    const close = () => {
        visible = false
    }

    $: if (visible) hide()

    $: if (kind === "error") hideCloseButton = false
    

</script>


{#if visible}
    <div out:fade={{delay}} class="toast-wrap">
        <ToastNotification
            {hideCloseButton}
            {kind}
            {title}
            {subtitle}
            {caption}
            on:close={close}
        />
    </div>
{/if}


<style>
    .toast-wrap{
        position: fixed;
        top: 50px;
        right: 0;
        z-index: 1000;
    }
</style>
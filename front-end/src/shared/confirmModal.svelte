<script>
    import {
      ComposedModal,
      ModalHeader,
      ModalBody,
      ModalFooter,
      Checkbox,
    } from "carbon-components-svelte";
    import { createEventDispatcher } from 'svelte';

	  const dispatch = createEventDispatcher();
  
    let checked = false;

    export let title = "Confirm changes"
    export let checkLabel = "I have reviewed the changes"
    export let subTitle = "Changes"
    export let open = false


  const submitted = () => {
      dispatch("approved", true)
      open = false
      checked = false
  }

  </script>
  
  <ComposedModal {open} on:submit={submitted}>
    <ModalHeader label={subTitle} title={title} />
    <ModalBody hasForm>
      <Checkbox labelText={checkLabel} bind:checked />
    </ModalBody>
    <ModalFooter primaryButtonText="Ok" primaryButtonDisabled={!checked} />
  </ComposedModal>
  
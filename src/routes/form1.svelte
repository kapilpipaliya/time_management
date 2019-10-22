<script>
	import { Form } from 'sveltejs-forms';
  import Select from 'svelte-select';
  import * as yup from 'yup';
	
	let svelteSelect;
	let submittedValues;
	
  function handleSubmit({ detail: { values, setSubmitting, resetForm } }) {
    setTimeout(() => {
      submittedValues = values;
      setSubmitting(false);
      svelteSelect.handleClear();
      resetForm();
    }, 2000);
  }
	
	const schema = yup.object().shape({
    food: yup.string().required()
  });
	
	let items = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'pizza', label: 'Pizza' },
    { value: 'cake', label: 'Cake' },
    { value: 'chips', label: 'Chips' },
    { value: 'ice-cream', label: 'Ice Cream' },
  ];
</script>

<style>
	.wrapper {
		width: 300px;
	}
	
	button {
		margin-top: 10px;
	}
</style>

<div class="wrapper">
	<Form
		{schema}
		on:submit={handleSubmit}
		let:isSubmitting
		let:setValue
		let:values
		let:errors
		let:touched>

		<Select
			{items}
			bind:this={svelteSelect}
			inputAttributes="{{ name: 'food' }}"
			hasError="{touched['food'] && errors['food']}"
			on:select="{({ detail }) => setValue('food', detail.value)}"
			on:clear="{() => setValue('food', '')}"
			selectedValue="{items.find(item => item.value === values['food'])}"/>

		<button type="submit" disabled={isSubmitting}>Submit</button>
	</Form>

	{#if submittedValues}
		Submitted values: {JSON.stringify(submittedValues)}
	{/if}
</div>
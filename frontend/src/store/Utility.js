export const UpdateObject = (oldObject, updatedProperties) => {
	return {
		...oldObject,
		...updatedProperties
	}
}
export const orderFormData = (
  elementType,
  type,
  placeholder,
  value,
  deliveryMethod
) => {
  let elementConfig = {
    type,
    placeholder,
  };

  if (deliveryMethod) {
    elementConfig = {
      options: [
        { value: "fastest", displayValue: "Fastest" },
        { value: "cheapest", displayValue: "Cheapest" },
      ],
    };
  }

  return {
    elementType,
    elementConfig,
    value,
  };
};

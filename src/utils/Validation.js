export function validateTodo(title, description) {
  if (!title.trim() || !description.trim()) {
    return {
      valid: false,
      message: "Todo Title or Description can't be empty.",
    };
  }
  return { valid: true };
}
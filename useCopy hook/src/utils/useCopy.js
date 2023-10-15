const useCopy = () => {
  const copy = async (text) => {
    if (!navigator?.clipboard) {
      console.warn("clipboard is not available");
      return;
    }
    try {
      await navigator?.clipboard?.writeText(text);
    } catch (e) {
      console.error(`error in copying the text ${text}`, e);
    }
  };
  return copy;
};

export default useCopy;

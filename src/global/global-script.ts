const globalScript = async (): Promise<void> => {
  console.log('Global script started');
  return new Promise<void>(resolve => setTimeout(() => {
    console.log('Global script ended');
    resolve();
  }, 1000));
};

export default globalScript;
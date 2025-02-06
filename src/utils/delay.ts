export default function delay(delayInMs = 3000) {
  return new Promise((resolve) => setTimeout(resolve, delayInMs))
}

export function checkPressEnter(e: any, callback: () => void) {
  if (e && e.keyCode == 13) {
    callback();
  }
}

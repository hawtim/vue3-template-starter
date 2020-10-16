export const throttle = (func: Function, wait: number, mustRun: number) => {
  let timeout: number
  let startTime = +new Date()
  return (...rest: any) => {
    const curTime = +new Date()
    clearTimeout(timeout)
    // 如果达到了规定的触发时间间隔，触发 handler
    if (curTime - startTime >= mustRun) {
      func.apply(null, rest)
      startTime = curTime
      // 没达到触发间隔，重新设定定时器
    } else {
      timeout = setTimeout(func, wait)
    }
  }
}

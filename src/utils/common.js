import { ElNotification, ElMessageBox } from 'element-plus'


// 提示相关 --------------------------------------------------------------------
// 消息提示
export function notification(message, type = 'success', dangerouslyUseHTMLString = false) {
  ElNotification({
    message:message,
    type,
    duration: 3000,
    dangerouslyUseHTMLString
  })
}
// 消息提示框
export function showModal(content, type = "warning", title = "") {
  return ElMessageBox.confirm(
    content,
    title,
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type,
    }
  )
}
// 消息弹出框
export function showMessageBox(tip, value = "") {
  return ElMessageBox.prompt(tip, "", {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    inputValue: value
  })
}

// 存储相关 --------------------------------------------------------------------
// 设置
export function setStorage(key, value, storageType = "local") {
  value = typeof value == "object" ? JSON.stringify(value) : value
  if (storageType == "session") {
    sessionStorage.setItem(key, value)
  } else {
    localStorage.setItem(key, value)
  }
}
// 获取
export function getStorage(key, storageType = "local") {
  if (storageType == "session") {
    return JSON.parse(sessionStorage.getItem(key))
  } else {
    return JSON.parse(localStorage.getItem(key))
  }
}
// 删除
export function removeStorage(key, storageType = "local") {
  if (storageType == "session") {
    sessionStorage.removeItem(key)
  } else {
    localStorage.removeItem(key)
  }
}

// 格式化 --------------------------------------------------------------------
// 格式化params参数
export function formatParams(data) {
  let arr = []
  for (const key of Object.keys(data)) {
    if (data[key]) {
      arr.push(`${key}=${encodeURIComponent(data[key])}`)
    }
  }
  // for (const key in data) {
  //   if (data[key]) {
  //     arr.push(`${key}=${encodeURIComponent(data[key])}`)
  //   }
  // }
  let params = arr.join("&")
  params = "?" + params
  return params
}

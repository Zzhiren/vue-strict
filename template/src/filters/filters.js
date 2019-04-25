const filter = {
  /**
   * @desc 转换成字符串
   * @param {Number} 需要转换的数字
   */
  vToString(value) {
    if (!value) {
      return value.toString();
    } else {
      return ''
    }
  },
}

export default filter;

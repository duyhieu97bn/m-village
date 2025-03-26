const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'vi'], // Danh sách ngôn ngữ bạn muốn hỗ trợ
  },
  localePath: path.resolve('./public/locales'), // Đường dẫn đến thư mục chứa các tệp ngôn ngữ
};
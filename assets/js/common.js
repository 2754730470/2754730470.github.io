// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  console.log('页面已加载');
  
  // 为所有按钮添加交互效果
  const buttons = document.querySelectorAll('button, .btn');
  buttons.forEach(btn => {
    btn.addEventListener('mousedown', () => {
      btn.style.transform = 'scale(0.98)';
    });
    
    btn.addEventListener('mouseup', () => {
      btn.style.transform = '';
    });
    
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
  
  // 为表单输入添加效果
  const inputs = document.querySelectorAll('.form-control');
  inputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
      this.parentElement.classList.remove('focused');
    });
  });
  
  // 链接跳转安全处理
  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
      // 确保所有站内链接正常工作
      if (this.href && this.href.includes('.html')) {
        console.log('跳转到:', this.href);
        // 实际项目中不需要阻止默认行为
      }
    });
  });
});
const { checkLogin } = require('./login');

describe('Kiểm tra hàm checkLogin', () => {
    test('Nên trả về true khi đúng tài khoản (admin) và mật khẩu (123)', () => {
        expect(checkLogin('admin', '123')).toBe(true);
    });

    test('Nên trả về false khi đúng tài khoản nhưng sai mật khẩu', () => {
        expect(checkLogin('admin', 'sai_mat_khau')).toBe(false);
    });

    test('Nên trả về false khi sai tài khoản nhưng đúng mật khẩu', () => {
        expect(checkLogin('khach', '123')).toBe(false);
    });

    test('Nên trả về false khi để trống cả hai trường', () => {
        expect(checkLogin('', '')).toBe(false);
    });
});
function generarOTP() {
            let otp = '';
            for (let i = 0; i < 6; i++) {
                otp += Math.floor(Math.random() * 10);
            }
            document.getElementById('otp').textContent = otp;
        }

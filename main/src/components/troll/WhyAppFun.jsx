// components/TrollButton.jsx
import { useState, useRef } from 'react';

const BASE_DATE = new Date('2026-06-28');
const MIN_DATE = new Date(BASE_DATE);
MIN_DATE.setDate(BASE_DATE.getDate() + 30);

export default function TrollButton() {
  // Quản lý các bước: 0 (Nhập số), 1 (Troll nút), 2 (Chọn ngày)
  const [step, setStep] = useState(0); 
  
  const [maxDodge, setMaxDodge] = useState(''); // Số người dùng tự nhập
  const [dodgeCount, setDodgeCount] = useState(0);
  const [date, setDate] = useState('');
  const [msg, setMsg] = useState(null);
  
  const arenaRef = useRef(null);
  const btnRef = useRef(null);
  const [pos, setPos] = useState({ x: '50%', y: '50%' });

  // Bước 0: Xác nhận con số "định mệnh"
  function handleStart() {
    const num = parseInt(maxDodge, 10);
    if (isNaN(num) || num < 0) {
      setMsg({ type: 'error', text: 'Nhập một số tử tế coi!' });
      return;
    }
    setMsg(null);
    setStep(1); // Chuyển sang màn rượt đuổi
  }

  // Bước 1: Rượt đuổi đã được sửa lỗi
  function dodge(e) {
    if (e) e.preventDefault();
    
    // Đã né đủ số lần người dùng nhập -> Nút ngừng chạy
    if (dodgeCount >= maxDodge) {
      // Bắt buộc phải click/chạm thật vào nút thì mới qua Bước 2
      if (e.type === 'click' || e.type === 'touchstart') {
        setStep(2);
      }
      return; // Dừng hàm, không di chuyển nút nữa
    }

    const arena = arenaRef.current;
    const btn = btnRef.current;
    
    const aW = arena.offsetWidth - btn.offsetWidth - 6;
    const aH = arena.offsetHeight - btn.offsetHeight - 6;

    setPos({ x: Math.random() * aW, y: Math.random() * aH });
    setDodgeCount(prev => prev + 1);
  }

  // Bước 2: Kiểm tra ngày
  function checkDate() {
    if (!date) { 
      setMsg({ type: 'error', text: 'Chưa chọn ngày kìa!' }); 
      return; 
    }
    
    const selected = new Date(date);
    
    if (selected < MIN_DATE) {
      setMsg({ type: 'error', text: 'Không được đâu! Chọn ngày xa hơn nữa đi =))' });
    } else {
      setMsg({ type: 'success', text: `Hay quá! Ngày ${selected.toLocaleDateString('vi-VN')} được chấp nhận!` });
    }
  }

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      gap: '1rem', 
      padding: '1rem',
      width: '100%',
      height: '100dvh',
      boxSizing: 'border-box',
      overflow: 'hidden'
    }}>
      
      {/* --- MÀN HÌNH 0: DỤ NHẬP SỐ --- */}
      {step === 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: 320, marginTop: '20vh' }}>
          <h2 style={{ margin: 0, textAlign: 'center' }}>Khởi động chút nhé!</h2>
          <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
            Thành thật đi, bạn tự chấm nhan sắc của mình bao nhiêu điểm? :)))
          </p>
          <input
            type="number"
            min="0"
            placeholder="10 hay 100 hay 1000 ???"
            value={maxDodge}
            onChange={e => { setMaxDodge(e.target.value); setMsg(null); }}
            style={{ padding: '10px 16px', border: '3px solid #000', fontSize: '1rem', boxShadow: '3px 3px 0 0 #000' }}
          />
          <button className="btn" onClick={handleStart} style={{ margin: 0, width: '100%' }}>
            Xác nhận
          </button>
          {msg && (
            <div style={{
              padding: '8px 16px', background: 'var(--pink)', border: '3px solid #000',
              boxShadow: '3px 3px 0 0 #000', fontWeight: 700
            }}>
              {msg.text}
            </div>
          )}
        </div>
      )}

      {/* --- MÀN HÌNH 1: RƯỢT ĐUỔI --- */}
      {step === 1 && (
        <>
          <h2 style={{ margin: 0, textAlign: 'center' }}>Bấm vào nút để tiếp tục nha</h2>
          <div ref={arenaRef} style={{
            position: 'relative', width: '100%', flex: 1, border: '3px solid #000', 
            background: 'var(--white)', overflow: 'hidden', touchAction: 'none' 
          }}>
            <button
              ref={btnRef}
              className="btn"
              style={{
                position: 'absolute',
                left: typeof pos.x === 'string' ? pos.x : pos.x,
                top: typeof pos.y === 'string' ? pos.y : pos.y,
                transform: typeof pos.x === 'string' ? 'translate(-50%,-50%)' : 'none',
                transition: 'left 0.15s ease-out, top 0.15s ease-out',
                margin: 0
              }}
              onMouseEnter={dodge}
              onTouchStart={dodge}
              onClick={dodge}
            >
              {dodgeCount >= maxDodge ? 'Thôi được rồi, tha đó' : 'Bấm vào đây'}
            </button>
          </div>
        </>
      )}

      {/* --- MÀN HÌNH 2: CHỌN NGÀY --- */}
      {step === 2 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: 320, marginTop: '20vh' }}>
          <h2 style={{ margin: 0, textAlign: 'center' }}>Vượt ải thành công! Chọn ngày đi</h2>
          <input
            type="date"
            value={date}
            onChange={e => { setDate(e.target.value); setMsg(null); }}
            style={{ padding: '10px 16px', border: '3px solid #000', fontSize: '1rem', boxShadow: '3px 3px 0 0 #000' }}
          />
          <button className="btn" onClick={checkDate} style={{ margin: 0, width: '100%' }}>
            Xác nhận ngày
          </button>
          {msg && (
            <div style={{
              padding: '8px 16px',
              background: msg.type === 'error' ? 'var(--pink)' : 'var(--green)',
              border: '3px solid #000', boxShadow: '3px 3px 0 0 #000', fontWeight: 700
            }}>
              {msg.text}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
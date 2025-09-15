'use client'

export default function TestePage() {
  return (
    <div style={{ 
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'green',
      color: 'white',
      padding: '20px',
      zIndex: 9999
    }}>
      <h1 style={{ fontSize: '32px', marginBottom: '20px' }}>TESTE - ROTA FUNCIONANDO</h1>
      <p>Se você vê isso, o Next.js está funcionando!</p>
    </div>
  )
}

const Tag = ({ label, color }) => (
  <span
    style={{
      padding: '4px 12px',
      borderRadius: '999px',
      fontSize: '0.72rem',
      fontWeight: 600,
      background: `${color}18`,
      color,
      border: `1px solid ${color}35`,
    }}
  >
    {label}
  </span>
);

export default Tag;

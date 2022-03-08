interface AvatarPlaceholderProps {
  color?: string;
  name?: string;
}

export const AvatarPlaceholder: React.FC<AvatarPlaceholderProps> = ({ color = 'var(--accent)', name = 'R' }) => {
  return (
    <span className='ph_avatar' style={color ? { backgroundColor: color } : { backgroundColor: 'var(--accent)' }}>
      <span className='ph_avatarLetter'>{name[0]}</span>
    </span>
  );
};

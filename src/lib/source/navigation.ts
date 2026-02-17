export function getSection(path: string | undefined) {
  if (!path) return 'godoxy';
  const [dir] = path.split('/', 1);
  if (!dir) return 'godoxy';
  return (
    ({
      godoxy: 'godoxy',
      impl: 'impl'
    } as const)[dir] ?? 'godoxy'
  );
}
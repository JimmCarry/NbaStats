import { ref } from 'vue';

export default function useTimeFormatter() {
  const formatTime = (date: Date): string => {
    const options = { hour: 'numeric', minute: 'numeric' };
    return date.toLocaleTimeString([], options);
  };

  return {
    formatTime,
  };
}
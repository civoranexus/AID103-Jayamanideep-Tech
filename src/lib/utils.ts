import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function formatDateTime(date: string): string {
  return new Date(date).toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function calculateDaysAgo(date: string): string {
  const days = Math.floor((Date.now() - new Date(date).getTime()) / (1000 * 60 * 60 * 24));
  if (days === 0) return 'Today';
  if (days === 1) return 'Yesterday';
  if (days < 7) return `${days} days ago`;
  if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
  return `${Math.floor(days / 30)} months ago`;
}

export function getSeverityColor(severity: string): string {
  switch (severity) {
    case 'critical':
      return 'text-status-critical bg-red-50 border-status-critical';
    case 'high':
      return 'text-orange-600 bg-orange-50 border-orange-600';
    case 'medium':
      return 'text-status-warning bg-yellow-50 border-status-warning';
    case 'low':
      return 'text-status-healthy bg-green-50 border-status-healthy';
    default:
      return 'text-gray-600 bg-gray-50 border-gray-600';
  }
}

export function getSeverityBadgeClass(severity: string): string {
  switch (severity) {
    case 'critical':
      return 'bg-status-critical text-white';
    case 'high':
      return 'bg-orange-600 text-white';
    case 'medium':
      return 'bg-status-warning text-white';
    case 'low':
      return 'bg-status-healthy text-white';
    default:
      return 'bg-gray-600 text-white';
  }
}

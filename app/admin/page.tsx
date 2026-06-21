import { redirect } from 'next/navigation';

export default function AdminPage() {
  // Redirect to the tests page by default when accessing /admin
  redirect('/admin/tests');
}

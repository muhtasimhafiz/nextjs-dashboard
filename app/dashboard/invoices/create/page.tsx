import Form from '@/app/ui/invoices/create-form'
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs'
import { fetchCustomers } from '@/app/lib/data'
import { invoices } from '@/app/lib/placeholder-data';

export default async function Page() {
  const customers = await fetchCustomers();
  return (
    <main>
      <Breadcrumbs breadcrumbs={[
        {label:'invoices', href:'/dashboard/invoices'},
        {
          label: 'Create',
          href:'/dashboard/invoices/create',
          active:true,
        }
      ]}      
      />
      <Form customers={customers} />
    </main>
  )
}
import {
  ThemeChanger,
  DynamicHelmet,
  UserNavigation,
  TransactionComponent,
} from "@/components";

const Transactions = () => {
  return (
    <div className="bg-white dark:bg-darkGray dark:text-slate-100 min-h-screen w-full">
      <DynamicHelmet
        title="Transactions page!"
        description="This is a transactions page. You will be able to see all the transactions happening on the platform."
        keywords="Transactions,payments"
      />

      <UserNavigation />

      <TransactionComponent />

      <ThemeChanger />
    </div>
  );
};

export default Transactions;

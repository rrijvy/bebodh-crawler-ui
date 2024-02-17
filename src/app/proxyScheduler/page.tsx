import { ProxyScheduleEditor } from "@/components/proxyScheduleEditor";
import { ProxySchedulerTable } from "@/components/proxySchedulerTable";
import { ReduxStoreProvider } from "@/components/reduxStoreProvider";
import { Separator } from "@/components/ui/separator";
import { RecurringScheduleSchema } from "@/models/recurringScheduleSchema";
import { apiRoutes } from "@/routes";

const ProxyScheduler = async () => {
  const recurringSchedulesResponse = await fetch(apiRoutes.getAllRecurringSchedules, { cache: "no-store" });
  const recurringSchedules = (await recurringSchedulesResponse.json()) as RecurringScheduleSchema[];
  return (
    <ReduxStoreProvider>
      <div className="flex flex-row">
        <div className="mx-auto w-4/6 px-3 pt-5">
          <ProxySchedulerTable schedules={recurringSchedules} />
        </div>
        <div className="mx-auto w-2/6 px-3 pt-5">
          <p>Make your schedule to run proxy retriver.</p>
          <Separator />
          <ProxyScheduleEditor />
        </div>
      </div>
    </ReduxStoreProvider>
  );
};

export default ProxyScheduler;

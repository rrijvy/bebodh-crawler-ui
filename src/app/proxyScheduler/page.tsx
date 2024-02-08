import { ProxyScheduleEditor } from "@/components/proxyScheduleEditor";
import { ProxySchedulerTable } from "@/components/proxySchedulerTable";
import { ReduxStoreProvider } from "@/components/reduxStoreProvider";
import { Separator } from "@/components/ui/separator";
import { RecurringScheduleSchema } from "@/models/recurringScheduleSchema";
import { apiRoutes } from "@/routes";
import React from "react";

const ProxyScheduler = async () => {
  const recurringSchedulesResponse = await fetch(apiRoutes.getAllRecurringSchedules, { cache: "no-store" });
  const recurringSchedules = (await recurringSchedulesResponse.json()) as RecurringScheduleSchema[];
  return (
    <ReduxStoreProvider>
      <div className="flex flex-row">
        <div className="w-3/5 pt-5 mx-auto px-3">
          <ProxySchedulerTable schedules={recurringSchedules} />
        </div>
        <div className="w-2/5 pt-5 mx-auto px-3">
          <p>Make your schedule to run proxy retriver.</p>
          <Separator />
          <ProxyScheduleEditor />
        </div>
      </div>
    </ReduxStoreProvider>
  );
};

export default ProxyScheduler;

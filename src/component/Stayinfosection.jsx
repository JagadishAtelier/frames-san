import React from "react";

const Stayinfosection = () => {
  return (
    <div className="space-y-6 bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
      {/* Stay Information Title */}
      <h2 className="text-xl font-semibold">Stay information</h2>

      {/* Description */}
      <div className="leading-relaxed text-neutral-700 dark:text-neutral-300">
        <span>
          Providing lake views, The Symphony 9 Tam Coc in Ninh Binh provides
          accommodation, an outdoor swimming pool, a bar, a shared lounge, a
          garden and barbecue facilities. Complimentary WiFi is provided.
        </span>
        <br />
        <br />
        <span>
          There is a private bathroom with bidet in all units, along with a
          hairdryer and free toiletries.
        </span>
        <br />
        <br />
        <span>
          The Symphony 9 Tam Coc offers a terrace. Both a bicycle rental service
          and a car rental service are available at the accommodation, while
          cycling can be enjoyed nearby.
        </span>
      </div>

      {/* Divider */}
      <hr className="w-full border-t border-neutral-950/10 dark:border-white/10" />

      {/* Room Rates Title */}
      <div>
        <h2 className="text-xl font-semibold">Room Rates</h2>
        <h3 className="mt-2.5 text-base leading-6 text-neutral-700 dark:text-neutral-300">
          Prices may increase on weekends or holidays
        </h3>
      </div>

      {/* Rates Table */}
      <dl className=" grid grid-cols-1 text-base leading-6 sm:grid-cols-[min(50%,--spacing(80))_auto]">
        {/* Mon–Thu */}
        <dt
          className="col-start-1 border-t border-neutral-950/5 pt-3 text-neutral-500 
                   first:border-none sm:py-3 dark:border-white/5 dark:text-neutral-400"
        >
          Monday - Thursday
        </dt>
        <dd
          className="pt-1 pb-3 text-neutral-950 sm:border-t sm:border-neutral-950/5 
                   sm:py-3 dark:text-white dark:sm:border-white/5"
        >
          $199
        </dd>

        {/* Fri–Sun */}
        <dt
          className="col-start-1 border-t border-neutral-950/5 pt-3 text-neutral-500
                   sm:py-3 dark:border-white/5 dark:text-neutral-400"
        >
          Friday - Sunday
        </dt>
        <dd
          className="pt-1 pb-3 text-neutral-950 sm:border-t sm:border-neutral-950/5
                   sm:py-3 dark:text-white dark:sm:border-white/5"
        >
          $219
        </dd>

        {/* Monthly */}
        <dt
          className="col-start-1 border-t border-neutral-950/5 pt-3 text-neutral-500 
                   sm:py-3 dark:border-white/5 dark:text-neutral-400"
        >
          Rent by month
        </dt>
        <dd
          className="pt-1 pb-3 text-neutral-950 sm:border-t sm:border-neutral-950/5
                   sm:py-3 dark:text-white dark:sm:border-white/5"
        >
          -8.34 %
        </dd>

        {/* Min Nights */}
        <dt
          className="col-start-1 border-t border-neutral-950/5 pt-3 text-neutral-500 
                   sm:py-3 dark:border-white/5 dark:text-neutral-400"
        >
          Minimum number of nights
        </dt>
        <dd
          className="pt-1 pb-3 text-neutral-950 sm:border-t sm:border-neutral-950/5
                   sm:py-3 dark:text-white dark:sm:border-white/5"
        >
          1 night
        </dd>

        {/* Max Nights */}
        <dt
          className="col-start-1 border-t border-neutral-950/5 pt-3 text-neutral-500
                   sm:py-3 dark:border-white/5 dark:text-neutral-400"
        >
          Max number of nights
        </dt>
        <dd
          className="pt-1 pb-3 text-neutral-950 sm:border-t sm:border-neutral-950/5
                   sm:py-3 dark:text-white dark:sm:border-white/5"
        >
          90 nights
        </dd>
      </dl>
    </div>
  );
};

export default Stayinfosection;

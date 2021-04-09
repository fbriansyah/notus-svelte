<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  const cancelHandler = () => dispatch("cancel");
  const submitHandler = () => dispatch("save");
</script>

<form class="space-y-8 divide-y divide-gray-200 bg-white rounded-md p-4">
  <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
    <div>
      <div>
        <h3 class="text-lg leading-6 font-medium text-gray-900">Profile</h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">
          This information will be displayed publicly so be careful what you
          share.
        </p>
      </div>

      <div class="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
        <div
          class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
        >
          <label
            for="username"
            class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Username
          </label>
          <div class="mt-1 sm:mt-0 sm:col-span-2">
            <div class="max-w-lg flex rounded-md shadow-sm">
              <span
                class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm"
              >
                workcation.com/
              </span>
              <input
                type="text"
                name="username"
                id="username"
                autocomplete="username"
                class="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
              />
            </div>
          </div>
        </div>

        <div
          class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
        >
          <label
            for="about"
            class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            About
          </label>
          <div class="mt-1 sm:mt-0 sm:col-span-2">
            <textarea
              id="about"
              name="about"
              rows="3"
              class="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
            />
            <p class="mt-2 text-sm text-gray-500">
              Write a few sentences about yourself.
            </p>
          </div>
        </div>
        
      </div>
    </div>

    <div class="pt-8 space-y-6 sm:pt-10 sm:space-y-5">

      <div
        class="divide-y divide-gray-200 pt-8 space-y-6 sm:pt-10 sm:space-y-5"
      >
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Notifications
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">
            We'll always let you know about important changes, but you pick what
            else you want to hear about.
          </p>
        </div>
        <div class="space-y-6 sm:space-y-5 divide-y divide-gray-200">
          <div class="pt-6 sm:pt-5">
            <div role="group" aria-labelledby="label-email">
              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline">
                <div>
                  <div
                    class="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700"
                    id="label-email"
                  >
                    By Email
                  </div>
                </div>
                <div class="mt-4 sm:mt-0 sm:col-span-2">
                  <div class="max-w-lg space-y-4">
                    <div class="relative flex items-start">
                      <div class="flex items-center h-5">
                        <input
                          id="comments"
                          name="comments"
                          type="checkbox"
                          class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="comments" class="font-medium text-gray-700"
                          >Comments</label
                        >
                        <p class="text-gray-500">
                          Get notified when someones posts a comment on a
                          posting.
                        </p>
                      </div>
                    </div>
                    <div>
                      <div class="relative flex items-start">
                        <div class="flex items-center h-5">
                          <input
                            id="candidates"
                            name="candidates"
                            type="checkbox"
                            class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                          />
                        </div>
                        <div class="ml-3 text-sm">
                          <label
                            for="candidates"
                            class="font-medium text-gray-700">Candidates</label
                          >
                          <p class="text-gray-500">
                            Get notified when a candidate applies for a job.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div class="relative flex items-start">
                        <div class="flex items-center h-5">
                          <input
                            id="offers"
                            name="offers"
                            type="checkbox"
                            class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                          />
                        </div>
                        <div class="ml-3 text-sm">
                          <label for="offers" class="font-medium text-gray-700"
                            >Offers</label
                          >
                          <p class="text-gray-500">
                            Get notified when a candidate accepts or rejects an
                            offer.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="pt-6 sm:pt-5">
            <div role="group" aria-labelledby="label-notifications">
              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline">
                <div>
                  <div
                    class="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700"
                    id="label-notifications"
                  >
                    Push Notifications
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <div class="max-w-lg">
                    <p class="text-sm text-gray-500">
                      These are delivered via SMS to your mobile phone.
                    </p>
                    <div class="mt-4 space-y-4">
                      <div class="flex items-center">
                        <input
                          id="push_everything"
                          name="push_notifications"
                          type="radio"
                          class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        />
                        <label
                          for="push_everything"
                          class="ml-3 block text-sm font-medium text-gray-700"
                        >
                          Everything
                        </label>
                      </div>
                      <div class="flex items-center">
                        <input
                          id="push_email"
                          name="push_notifications"
                          type="radio"
                          class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        />
                        <label
                          for="push_email"
                          class="ml-3 block text-sm font-medium text-gray-700"
                        >
                          Same as email
                        </label>
                      </div>
                      <div class="flex items-center">
                        <input
                          id="push_nothing"
                          name="push_notifications"
                          type="radio"
                          class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        />
                        <label
                          for="push_nothing"
                          class="ml-3 block text-sm font-medium text-gray-700"
                        >
                          No push notifications
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-5">
      <div class="flex justify-end">
        <button
          on:click={cancelHandler}
          type="button"
          class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Cancel
        </button>
        <button
          on:click={submitHandler}
          type="submit"
          class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</form>

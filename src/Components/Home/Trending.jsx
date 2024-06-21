import React from "react";
import { Link } from "react-router-dom";

const Trending = () => {
  return (
    <div class="bg-gray-50  py-8 sm:py-8">
      <div class="mx-auto max-w-8xl px-6 lg:px-8">
        <div class="mx-auto max-w-3xl lg:text-center">
          <h2 class="text-base font-semibold leading-7 text-[#219ebc]">
            Bookworm
          </h2>
          <p class="mt-2 text-3xl font-ubuntu font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to Know about
          </p>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            we offer an extensive collection of books across various genres and
            categories. Whether you're into fiction, non-fiction, romance,
            sci-fi, or self-help, we have something for every book lover.
          </p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl class="grid max-w-2xl grid-cols-1 gap-x-16 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div class="relative pl-16">
              <dt class="text-base font-semibold leading-7 text-gray-900">
                <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#023047]">
                  <svg
                    class="h-8 w-8 text-white"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <circle cx="7" cy="17" r="2" />{" "}
                    <circle cx="17" cy="17" r="2" />{" "}
                    <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v6h-5l2 2m0 -4l-2 2" />{" "}
                    <path d="M9 17h6" /> <path d="M13 6h5l3 5v6h-2" />
                  </svg>
                </div>
                Easy Returns
              </dt>
              <dd class="mt-2 text-base leading-7 text-gray-600">
                If you're not satisfied with your purchase, you can return it
                within 30 days for a full refund or exchange.
              </dd>
            </div>
            <div class="relative pl-16">
              <dt class="text-base font-semibold leading-7 text-gray-900">
                <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#023047]">
                  <svg
                    class="h-6 w-6 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />{" "}
                    <circle cx="8.5" cy="7" r="4" />{" "}
                    <line x1="20" y1="8" x2="20" y2="14" />{" "}
                    <line x1="23" y1="11" x2="17" y2="11" />
                  </svg>
                </div>
                Verified Users
              </dt>
              <dd class="mt-2 text-base leading-7 text-gray-600">
                Our community of readers and reviewers are verified users,
                ensuring that you get genuine reviews and ratings.
              </dd>
            </div>
            <div class="relative pl-16">
              <dt class="text-base font-semibold leading-7 text-gray-900">
                <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#023047]">
                  <svg
                    class="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                  </svg>
                </div>
                Simple UI
              </dt>
              <dd class="mt-2 text-base leading-7 text-gray-600">
                Our website is designed with you in mind. Enjoy a clean and
                straightforward user interface that makes browsing a breeze
              </dd>
            </div>
            <div class="relative pl-16">
              <dt class="text-base font-semibold leading-7 text-gray-900">
                <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#023047]">
                  <svg
                    class="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
                    />
                  </svg>
                </div>
                Advanced security
              </dt>
              <dd class="mt-2 text-base leading-7 text-gray-600">
                Bookworm employs advanced security measures to protect your
                personal information and payment details.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Trending;

import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";

const researchDropdown = [
  { name: "Focus", href: "/research/focus" },
  { name: "Projects", href: "/research/projects" },
  { name: "Publications", href: "/research/publications" },
  { name: "Software", href: "/research/software" },
];

const navigation = [
  { name: "Home", href: "/" },
  { name: "Research", href: "/research", dropdown: researchDropdown },
  { name: "Team", href: "/team" },
  { name: "Gallery", href: "/gallery" },
];
export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-gray-200">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-4 lg:px-8 bg-white"
      >
        <div className="flex lg:flex-1 items-center gap-2">
          <NavLink to="/" className="-m-1.5 p-1.5">
            <img alt="" src="SE-ALL.png" className="h-8 w-auto" />
          </NavLink>
          <span className="text-xl font-semibold">SE-ALL Lab</span>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 cursor-pointer"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <div key={item.name}>
               {item.dropdown && (
                 <Menu as="div" className="relative">
                   <MenuButton
                     className={`cursor-pointer flex items-center gap-x-1 text-sm/6 font-semibold ${
                       location.pathname.startsWith("/research")
                         ? "text-blue-600"
                         : "text-gray-900 hover:text-blue-600"
                     }`}
                   >
                     {item.name}
                     <ChevronDownIcon aria-hidden="true" className="size-4" />
                   </MenuButton>
                  <MenuItems className="absolute -left-8 top-full z-10 mt-3 w-48 overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5">
                    {item.dropdown.map((item) => (
                      <MenuItem key={item.name}>
                        {({ active }) => (
                          <NavLink
                            to={item.href}
                            className={`block px-4 py-2 text-sm/6 font-semibold ${
                              active
                                ? "bg-blue-50 text-blue-600"
                                : "text-gray-900"
                            }`}
                          >
                            {item.name}
                          </NavLink>
                        )}
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
              )}
              {!item.dropdown && (
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `text-sm/6 font-semibold ${
                      isActive
                        ? "text-blue-600"
                        : "text-gray-900 hover:text-blue-600"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              )}
            </div>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <NavLink to="/" className="-m-1.5 p-1.5">
                <img alt="" src="SE-ALL.png" className="h-8 w-auto" />
              </NavLink>
              <span className="text-xl font-semibold">SE-ALL Lab</span>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 cursor-pointer"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div className="-mx-3 px-3 py-2">
                        <div className="text-sm/6 font-semibold text-gray-500 uppercase tracking-wider mb-2">
                          {item.name}
                        </div>
                        <div className="space-y-1">
                          {item.dropdown.map((dropdownItem) => (
                            <NavLink
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={({ isActive }) =>
                                `block rounded-lg px-3 py-2 text-base/7 font-semibold ${
                                  isActive
                                    ? "bg-blue-50 text-blue-600"
                                    : "text-gray-900 hover:bg-gray-50"
                                }`
                              }
                            >
                              {dropdownItem.name}
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <NavLink
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={({ isActive }) =>
                          `-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold ${
                            isActive
                              ? "bg-blue-50 text-blue-600"
                              : "text-gray-900 hover:bg-gray-50"
                          }`
                        }
                      >
                        {item.name}
                      </NavLink>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

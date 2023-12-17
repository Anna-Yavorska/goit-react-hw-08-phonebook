import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilters = state => state.filter;

export const selectfilteredContacts = createSelector(
  [selectContacts, selectFilters],
  (contacts, filter) => {
    const filteredContacts = filter
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts;
    return filteredContacts;
  }
);

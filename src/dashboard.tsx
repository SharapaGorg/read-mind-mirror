import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { URLs } from './__data__/urls'
import { MainPage, ChatPage, CatalogPage, OrdersPage, AnalyticsPage } from './pages'

const PageWrapper = ({ children }: React.PropsWithChildren) => (
  <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
)

export const Dashboard = () => {
  return (
    <Routes>
      <Route
        path={URLs.baseUrl}
        element={
          <PageWrapper>
            <MainPage />
          </PageWrapper>
        }
      />
      <Route
        path={URLs.chat.url}
        element={
          <PageWrapper>
            <ChatPage />
          </PageWrapper>
        }
      />
      <Route
        path={URLs.catalog.url}
        element={
          <PageWrapper>
            <CatalogPage />
          </PageWrapper>
        }
      />
      <Route
        path={URLs.orders.url}
        element={
          <PageWrapper>
            <OrdersPage />
          </PageWrapper>
        }
      />
      <Route
        path={URLs.analytics.url}
        element={
          <PageWrapper>
            <AnalyticsPage />
          </PageWrapper>
        }
      />
    </Routes>
  )
}

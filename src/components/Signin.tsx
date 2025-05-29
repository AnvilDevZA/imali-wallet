import React from 'react'
import ReactDOM from 'react-dom/client'
import { createFormHook, createFormHookContexts } from '@tanstack/react-form'
import { z } from 'zod'

const { fieldContext, formContext } = createFormHookContexts()
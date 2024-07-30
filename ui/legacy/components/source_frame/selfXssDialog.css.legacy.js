// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
export default {
  cssContent: `/*
 * Copyright (c) 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.widget {
  padding: 20px;
}

.title {
  font-size: larger;
}

.title,
.message,
.button,
.text-input {
  margin: 5px;
}

.button {
  text-align: right;
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
  gap: var(--sys-size-6);
}

.button button {
  min-width: 80px;
}

.dialog-close-button {
  position: absolute;
  right: 9px;
  top: 9px;
  z-index: 1;
}

/*# sourceURL=selfXssDialog.css */
`
};

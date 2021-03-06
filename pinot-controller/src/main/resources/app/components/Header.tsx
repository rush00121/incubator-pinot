/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box } from '@material-ui/core';
import Logo from './Logo';
import BreadcrumbsComponent from './Breadcrumbs';

type Props = {
  highlightSidebarLink: (id: number) => void;
};

const Header = ({ highlightSidebarLink, ...props }: Props) => (
  <AppBar position="static">
    <Box display="flex">
      <Box textAlign="center" marginY="12.5px" width={250} borderRight="1px solid rgba(255,255,255,0.5)">
        <Link to="/"><Logo onClick={(event) => highlightSidebarLink(1)} /></Link>
      </Box>
      <Box display="flex" alignItems="center">
        <BreadcrumbsComponent {...props}/>
      </Box>
    </Box>
  </AppBar>
);

export default Header;
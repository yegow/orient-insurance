import React, { useState, useEffect } from 'react';
import { Col, List, Row, Input } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

import Page from '../../components/Page';
import { search } from '../../util/http/policies';
import { AList } from './NewApplicationList';

const { Search } = Input;

export default function RenewalApplicationsList({
  renewalApplications,
  updatePolicies
}) {
  const [term, setTerm] = useState('');
  const [innerPolicies, setInnerPolicies] = useState(renewalApplications);

  useEffect(() => {
    if (renewalApplications.length < 20) {
      try {
        (async () => {
          const res = await search({
            type: 'renewal'
          });
          if (!res) return;
          updatePolicies(res.data);
        })()
      } catch (error) {
        console.log('FETCH ERROR renewal policies', error);
      }
    }
  }, []);

  useEffect(() => {
    const match = term ?
      renewalApplications.filter(i => i.policyNumber.match(term)) :
      renewalApplications;
    setInnerPolicies(match);
  }, [renewalApplications, term]);

  const onSearch = async (searchTerm) => {
    setTerm(searchTerm);
    if (!searchTerm) {
      return;
    }

    const resp = await search(searchTerm);
    if (resp && resp.data) {
      updatePolicies(resp.data);
    }
  };

  return (
    <Page pageTitle="Renewal Applications">
      <Row justify="center">
        <Col flex="auto">
          <Row justify="center">
            <Col xs={24} sm={18} lg={12}>
              <Search placeholder="Policy number" onSearch={onSearch} enterButton />
            </Col>
          </Row>
          <Row justify="center">
            <Col xs={24} lg={20}>
              <AList items={innerPolicies} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Page>
  );
}

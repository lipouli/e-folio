import React from 'react';
import { arc, pie } from 'd3';

import MenuItem from '~/containers/Menu/ArcMenu/MenuItem';
import menuList from '~/data/menu';

class ArcMenu extends React.Component {
  state = {
    arcs: [],
    svgSize: 0,
    arcGenerator: arc(),
  }

  componentDidMount() {
    this.getArcData();
    this.updateSvgDimensions();
    window.addEventListener('resize', this.updateSvgDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateSvgDimensions);
  }

  getArcData = () => {
    const pieGenerator = pie();
    const data = menuList;
    const arcs = pieGenerator.value(() => 1)(data);
    this.setState({
      arcs,
    });
  }

  updateSvgDimensions = () => {
    const width = Math.floor(window.innerWidth * 80 / 100);
    const height = Math.floor(window.innerHeight * 80 / 100);
    this.setState({
      svgSize: width > height ? height : width,
    });
  }

  showArcs = () => {
    const { arcGenerator, arcs, svgSize } = this.state;
    const innerRadius = Math.floor(svgSize / 8);
    const outerRadius = Math.floor(svgSize / 3);
    const delay = 1000 / arcs.length;
    const paths = arcs.map((arcPath) => {
      const param = {
        innerRadius,
        outerRadius,
        startAngle: arcPath.startAngle,
        endAngle: arcPath.endAngle,
      };
      const path = arcGenerator(param);
      return (
        <MenuItem
          key={arcPath.data.name}
          path={path}
          label={arcPath.data.name}
          refTo={arcPath.data.path}
          index={arcPath.index}
          delay={delay}
          labelPosition={arcGenerator.centroid(param)}
          icon={arcPath.data.icon}
          name={arcPath.data.name}
        />
      );
    });
    return paths;
  }

  render() {
    const { svgSize } = this.state;
    return (
      <svg height={svgSize} width={svgSize} viewBox={`-${svgSize / 2} -${svgSize / 2} ${svgSize} ${svgSize}`}>
        {this.showArcs()}
      </svg>
    );
  }
}

export default ArcMenu;

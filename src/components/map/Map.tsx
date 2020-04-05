import * as React from 'react';
import { loadBingApi, Microsoft } from './loader';

export interface LatLng {
  latitude: number;
  longitude: number;
}

interface IMapProps {
  apiKey: string;
  center: LatLng;
  className: string;
  zoom: number;
}

const defaultProps = {
  zoom: 14,
};

export default class extends React.PureComponent<IMapProps & typeof defaultProps, any> {
  public static defaultProps = defaultProps;
  private mapRef = React.createRef<HTMLDivElement>();
  private map: any;

  public render() {
    return <div ref={this.mapRef} className={this.props.className} />;
  }

  public componentDidMount() {
    loadBingApi(this.props.apiKey).then(() => {
      this.initMap();
    });
  }

  public componentWillUnmount() {
    this.map && this.map.dispose();
  }

  private initMap() {
    const { center: { latitude, longitude } = {}, zoom } = this.props;

    this.map = new Microsoft.Maps.Map(this.mapRef.current);

    if (latitude && longitude) {
      this.map.setView({
        center: new Microsoft.Maps.Location(latitude, longitude),
        zoom,
      });
    }
  }
}

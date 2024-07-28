import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Cập nhật state để render giao diện dự phòng vào lần render tiếp theo.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Bạn có thể ghi log lỗi vào dịch vụ báo cáo lỗi.
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Bạn có thể render bất kỳ giao diện dự phòng nào.
      return (
        <div className="w-full h-screen flex items-center justify-center">
          <h2 className="text-[160px] text-red-500 font-bold">
            404 Page Not Found{" "}
          </h2>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
